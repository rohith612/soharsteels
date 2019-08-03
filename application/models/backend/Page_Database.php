<?php

class Page_Database extends CI_Model
{
    // Read data from database to show data in admin page
    public function read_page_information()
    {
        $this->db->select('*');
        $this->db->from('pages');
        // $this->db->order_by('page_order', 'ASC');
        $this->db->where('page_status', 1);
        $query = $this->db->get();
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return array();
        }
    }
    // Read data from database to show data in admin page
    public function get_page_information($page_id)
    {
        $condition = "page_id =" . "'" . $page_id . "' AND page_status = 1";
        $this->db->select('*');
        $this->db->from('pages');
        $this->db->where($condition);
        $this->db->limit(1);
        $query = $this->db->get();
        if ($query->num_rows() == 1) {
            return $query->result();
        } else {
            return false;
        }
    }
    // Read data from database to show data in admin page
    public function get_subpage_information($page_id)
    {
        $condition = "page_id =" . "'" . $page_id . "'";
        $this->db->select('*');
        $this->db->from('content_map');
        $this->db->where($condition);
        $query = $this->db->get();
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return array();
        }
    }
    // Read data from database to show data in admin page
    public function update_page_information($page_id, $data_array, $file_uploaded)
    {
        if ($file_uploaded) {
            $this->db->where('page_id', $page_id);
            $this->db->from('pages');
            $query = $this->db->get();
            if ($query->num_rows() > 0) {
                $data_file_name_exist = $query->result();
                $old_file_name = $data_file_name_exist[0]->page_banner;
                if ($old_file_name != '') {
                    $file_pointer = './uploads/banners/' . $old_file_name;
                    if (file_exists($file_pointer)) {
                        unlink($file_pointer);
                    }
                }
            }
        }
        $this->db->where('page_id', $page_id);
        $this->db->update('pages', $data_array);
        if ($this->db->affected_rows() > 0) {
            // $this->update_slug_page($page_id, $data_array);
            return true;
        } else {
            return false;
        }
    }
    // Read data from database to show data in admin page
    public function update_subpage_information($sub_title, $sub_content, $sub_id, $filename)
    {
        // Query to insert data in database
        $update_array = array(
            "sub_content_title" => $sub_title,
            "sub_contents" => $sub_content,
        );
        if ($filename != '') {
            $this->db->where('id', $sub_id);
            $this->db->from('content_map');
            $query = $this->db->get();
            if ($query->num_rows() > 0) {
                $data_file_name_exist = $query->result();
                $old_file_name = $data_file_name_exist[0]->sub_content_image;
                if ($old_file_name != '') {
                    $file_pointer = './uploads/banners/' . $old_file_name;
                    if (file_exists($file_pointer)) {
                        unlink($file_pointer);
                    }
                }
            }
            $update_array['sub_content_image'] = $filename;
        }
        $this->db->where('id', $sub_id);
        $this->db->update('content_map', $update_array);
        if ($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }
    // delete user profile informations
    public function delete_page_information($id)
    {
        // Query to insert data in database
        $delete_array = array(
            "page_status" => 0
        );
        $this->db->where('page_id', $id);
        $this->db->update('pages', $delete_array);
        if ($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }
    // Read data from database to show data in admin page
    public function insert_page_information($data_array)
    {
        $this->db->insert('pages', $data_array);
        $insert_id = $this->db->insert_id();
        if ($this->db->affected_rows() > 0) {
            $this->add_slug_page($insert_id, $data_array);

            return true;
        } else {
            return false;
        }
    }
    // common page slug
    function add_slug_page($insert_id, $data_array)
    {
        $slug_url = preg_replace('/\s+/', '-', strtolower($data_array['page_name']));
        $array = array(
            "page_id" => $insert_id,
            "slug_url" => $slug_url,
            "temp_function" => ""
        );
        $this->db->insert('template', $array);
        $insert_id = $this->db->insert_id();
        if ($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }
    // common page slug
    function update_slug_page($insert_id, $data_array)
    {
        $slug_url = preg_replace('/\s+/', '-', strtolower($data_array['page_name']));
        $array = array(
            "slug_url" => $slug_url,
        );
        $this->db->where('page_id', $insert_id);
        $this->db->update('template', $array);
        $insert_id = $this->db->insert_id();
        if ($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }
}

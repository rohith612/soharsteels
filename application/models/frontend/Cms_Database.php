<?php

class Cms_Database extends CI_Model
{

    // Read data from database to show data in admin page
    public function read_page_information($page_id)
    {
        $condition = "page_id =" . "'" . $page_id . "'";
        $this->db->select('*');
        $this->db->from('pages');
        $this->db->where($condition);
        $this->db->limit(1);
        $query = $this->db->get();

        if ($query->num_rows() == 1) {
            return $query->result();
        } else {
            return array();
        }
    }
    // Read data from database to show data in admin page
    public function read_menu_information()
    {
        $this->db->select('*');
        $this->db->from('pages');
        $this->db->join('template', 'template.page_id = pages.page_id');
        $this->db->where('pages.page_parent', 0);
        $this->db->order_by('pages.page_order', 'ASC');
        $query = $this->db->get();
        if ($query->num_rows() > 0) {
            $result =  $query->result();
            $menu_array = array();
            if (sizeof($result) > 0) {
                $in = 0;
                foreach ($result as $row) {
                    $menu_array[$in]['menu_icons'] = $row->page_icons;
                    $menu_array[$in]['menu_name'] = $row->page_name;
                    $menu_array[$in]['menu_url'] = $row->slug_url;
                    $menu_array[$in]['menu_childs'] = $this->get_sub_menus($row->page_id);
                    $in++;
                }
            }
            return $menu_array;
        } else {
            return array();
        }
    }

    public function get_sub_menus($parent_id)
    {
        $this->db->select('*');
        $this->db->from('pages');
        $this->db->join('template', 'template.page_id = pages.page_id');
        $this->db->where('pages.page_parent', $parent_id);
        $query = $this->db->get();
        if ($query->num_rows() > 0) {
            $result =  $query->result();
            $menu_array = array();
            if (sizeof($result) > 0) {
                $in = 0;
                foreach ($result as $row) {
                    $menu_array[$in]['menu_name'] = $row->page_name;
                    $menu_array[$in]['menu_url'] = $row->slug_url;
                    $in++;
                }
            }
            return $menu_array;
        } else {
            return array();
        }
    }
    // Read data from database to show data in admin page
    public function read_slug_information($page_slug)
    {
        $condition = "slug_url =" . "'" . $page_slug . "'";
        $this->db->select('*');
        $this->db->from('template');
        $this->db->where($condition);
        $this->db->limit(1);
        $query = $this->db->get();
        if ($query->num_rows() == 1) {
            return $query->result();
        } else {
            return array();
        }
    }
    // Read data from database to show data in admin page
    public function read_subpage_information($page_id)
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
}

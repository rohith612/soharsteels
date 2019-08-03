<?php

class Profile_Database extends CI_Model
{
    // Read data from database to show data in admin page
    public function read_user_information($user_id)
    {
        $this->db->select('*');
        $this->db->from('users');
        $this->db->where('id', $user_id);
        $this->db->limit(1);
        $query = $this->db->get();

        if ($query->num_rows() == 1) {
            return $query->result();
        } else {
            return false;
        }
    }
    // update user profile informations
    public function update_user_information($information, $id)
    {
        // Query to insert data in database
        $this->db->where('id', $id);
        $this->db->update('users', $information);
        if ($this->db->affected_rows() > 0) {
            return true;
        } else {
            return false;
        }
    }
    
}

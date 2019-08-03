<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Profile extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		// Load form helper library
		$this->load->helper('form');
		// Load form validation library
		$this->load->library('form_validation');
		// Load session library
		$this->load->library('session');
		// Load database
		$this->load->database();
		$this->load->helper('security');
		$this->load->model('backend/profile_database');
	}
	// profile page view
	public function index()
	{
		if (!isset($this->session->userdata['logged_in'])) {
			$this->load->view('backend/login_page');
		} else {
			$id = $this->session->userdata['logged_in']['id'];
			$data['profile'] = $this->profile_database->read_user_information($id);
			$this->load->view('backend/theme/header');
			$this->load->view('backend/theme/sidebar');
			$this->load->view('backend/profile', $data);
			$this->load->view('backend/theme/footer');
		}
	}
	// update profile information
	public function update_profile()
	{
		$this->form_validation->set_error_delimiters('<div class="error">', '</div>');
		$this->form_validation->set_rules('email', 'Email address', 'trim|required|xss_clean');
		$this->form_validation->set_rules('name', 'Profile Name', 'trim|required|xss_clean');
		$this->form_validation->set_rules('password', 'Password', 'trim|xss_clean');
		$this->form_validation->set_rules('passconf', 'Password Confirmation', 'trim|matches[password]');
		$id = $this->session->userdata['logged_in']['id'];
		if ($this->form_validation->run() == FALSE) {

			$data['profile'] = $this->profile_database->read_user_information($id);
			$this->load->view('backend/theme/header');
			$this->load->view('backend/theme/sidebar');
			$this->load->view('backend/profile', $data);
			$this->load->view('backend/theme/footer');
		} else {
			$data = array(
				"user_name" => $this->input->post('email'),
				"user" => $this->input->post('name')
			);
			if ($this->input->post('password') != '')
				$data['password'] = md5($this->input->post('password'));
			$update_profile = $this->profile_database->update_user_information($data, $id);
			if ($update_profile) {
				$this->session->set_flashdata('success', 'Profile Updated successfully');
			} else {
				$this->session->set_flashdata('error', "Sorry Can't update profile");
			}
			redirect('admin/profile');
		}
	}
}

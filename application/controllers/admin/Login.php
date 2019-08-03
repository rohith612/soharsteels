<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Login extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->database();
		// Load form helper library
		$this->load->helper('form');
		// Load form validation library
		$this->load->library('form_validation');
		// Load session library
		$this->load->library('session');
		// Load database
		$this->load->model('backend/Login_Database');
		$this->load->helper('security');
	}
	// login page
	public function index()
	{
		$this->load->view('backend/login_page');
	}
	// Check for user login process
	public function user_login_process()
	{
		$this->form_validation->set_rules('username', 'Username', 'trim|required|xss_clean');
		$this->form_validation->set_rules('password', 'Password', 'trim|required|xss_clean');

		if ($this->form_validation->run() == FALSE) {
			if (isset($this->session->userdata['logged_in'])) {
				redirect('/admin/home');
			} else {
				$this->load->view('backend/login_page');
			}
		} else {
			$data = array(
				'username' => $this->input->post('username'),
				'password' => md5($this->input->post('password'))
			);
			$result = $this->Login_Database->login($data);
			if ($result == TRUE) {

				$username = $this->input->post('username');
				$result = $this->Login_Database->read_user_information($username);

				if ($result) {
					$session_data = array(
						'username' => $result[0]->user_name,
						'name' => $result[0]->user,
						'id' => $result[0]->id,
					);
					// Add user data in session
					$this->session->set_userdata('logged_in', $session_data);
					redirect('/admin/home');
				}
			} else {
				$data = array(
					'error_message' => 'Invalid Username or Password'
				);
				$this->load->view('backend/login_page', $data);
			}
		}
	}
	// Logout from admin page
	public function logout()
	{
		// Removing session data
		$sess_array = array(
			'username' => ''
		);
		$this->session->unset_userdata('logged_in', $sess_array);
		$data['message_display'] = 'Successfully Logout';
		$this->load->view('backend/login_page', $data);
	}
}

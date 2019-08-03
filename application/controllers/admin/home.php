<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
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
	}
	// home page view
	public function index()
	{
		if (!isset($this->session->userdata['logged_in'])) {
			$this->load->view('backend/login_page');
		} else {
			$this->load->view('backend/theme/header');
			$this->load->view('backend/theme/sidebar');
			$this->load->view('backend/dashboard');
			$this->load->view('backend/theme/footer');
		}
	}
}

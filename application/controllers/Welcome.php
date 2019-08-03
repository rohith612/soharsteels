<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->model('frontend/Cms_Database');
	}
	

	public function index()
	{
		$data_menu['page_menu'] = 'home';
		$data['contents'] = $this->Cms_Database->read_page_information(1);
		$data_menu['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data_menu);
		$this->load->view('frontend/index', $data);
		$this->load->view('frontend/theme/footer');
	}


}

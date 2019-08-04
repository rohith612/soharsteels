<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->model('frontend/Cms_Database');
	}

	public function index()
	{

		$page_slug =  $this->uri->segment(1);
		if ($page_slug == '') {
			$this->home_page(1);
		} else {
			$function_name = $this->Cms_Database->read_slug_information($page_slug);
			if (sizeof($function_name) > 0) {
				$function_call = $function_name[0]->temp_function;

				$function_para = $function_name[0]->page_id;
				$this->$function_call($function_para);
			} else {
				$this->page_not_found();
			}
		}
	}
	function page_not_found()
	{
		$data['page_menu'] = 'page not found';
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/page_not_found', $data);
		$this->load->view('frontend/theme/footer');
	}
	
	/**
	 * page home / index
	 */
	/*public function home_page($function_para)
	{
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data_menu['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data_menu);
		$this->load->view('frontend/index', $data);
		$this->load->view('frontend/theme/footer');
	}*/
	/**
	 * page comapny profile
	 */
	public function default_template($function_para)
	{
		$data['page_menu'] = 'default template';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['sub_contents'] = $this->Cms_Database->read_subpage_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/default_page', $data);
		$this->load->view('frontend/theme/footer');
	}
	public function comapny_profile($function_para)
	{
		$data['page_menu'] = 'comapny_profile';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['sub_contents'] = array();//$this->Cms_Database->read_subpage_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/company_profile', $data);
		$this->load->view('frontend/theme/footer');
	}
	/**
	 * page policy env
	 */
	public function policy_env($function_para)
	{
		$data['page_menu'] = 'policy env';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/policy_env', $data);
		$this->load->view('frontend/theme/footer');
	}

	/**
	 * page rolling mills
	 */
	public function rolling_mills($function_para)
	{
		$data['page_menu'] = 'rolling mills';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/rolling_mills', $data);
		$this->load->view('frontend/theme/footer');
	}

	/**
	 * page industries llc
	 */
	public function industries_llc($function_para)
	{
		$data['page_menu'] = 'industries llc';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/industries_llc', $data);
		$this->load->view('frontend/theme/footer');
	}

	/**
	 * page steel llc
	 */
	public function steel_llc($function_para)
	{
		$data['page_menu'] = 'steel llc';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/steel_llc', $data);
		$this->load->view('frontend/theme/footer');
	}

	/**
	 * page reinforcing bars
	 */
	public function reinforcing_bars($function_para)
	{
		$data['page_menu'] = 'reinforcing bars';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/reinforcing_bars', $data);
		$this->load->view('frontend/theme/footer');
	}
	/**
	 * page steel mesh
	 */
	public function steel_mesh($function_para)
	{
		$data['page_menu'] = 'steel mesh';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/steel_mesh', $data);
		$this->load->view('frontend/theme/footer');
	}
	/**
	 * page steel billets
	 */
	public function steel_billets($function_para)
	{
		$data['page_menu'] = 'steel billets';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/steel_billets', $data);
		$this->load->view('frontend/theme/footer');
	}

	/**
	 * page epoxy coating
	 */
	public function epoxy_coating($function_para)
	{
		$data['page_menu'] = 'epoxy coating';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/epoxy_coating', $data);
		$this->load->view('frontend/theme/footer');
	}

	/**
	 * page quality standards
	 */
	public function quality_standards($function_para)
	{
		$data['page_menu'] = 'quality standards';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/default_page', $data);
		//$this->load->view('frontend/default_pagequality_standards', $data);
		$this->load->view('frontend/theme/footer');
	}
	/**
	 * page quality certificates
	 */
	public function quality_certificates($function_para)
	{
		$data['page_menu'] = 'quality certificates';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/quality_certificates', $data);
		$this->load->view('frontend/theme/footer');
	}
	/**
	 * page contact us
	 */
	public function contact_us($function_para)
	{
		$data['page_menu'] = 'contact us';
		$data['contents'] = $this->Cms_Database->read_page_information($function_para);
		$data['menus'] = $this->Cms_Database->read_menu_information();
		$this->load->view('frontend/theme/header', $data);
		$this->load->view('frontend/contact_us', $data);
		$this->load->view('frontend/theme/footer');
	}
}

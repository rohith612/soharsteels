<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Page extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		// Load form helper library
		$this->load->helper(array('form', 'url'));
		// Load form validation library
		$this->load->library('form_validation');
		// Load session library
		$this->load->library('session');
		$this->load->helper('file');
		// Load database
		$this->load->database();
		$this->load->helper('security');
		$this->load->model('backend/Page_Database');
		$this->load->library('encrypt');
	}
	// show page index
	public function index()
	{
		if (!isset($this->session->userdata['logged_in'])) {
			$this->load->view('backend/login_page');
		} else {
			$id = $this->session->userdata['logged_in']['id'];
			$data['page_list'] = $this->Page_Database->read_page_information();
			$this->load->view('backend/theme/header');
			$this->load->view('backend/theme/sidebar');
			$this->load->view('backend/page/pages_index', $data);
			$this->load->view('backend/theme/footer');
		}
	}
	// add new page view
	public function new_page()
	{
		if (!isset($this->session->userdata['logged_in'])) {
			$this->load->view('backend/login_page');
		} else {
			$data['page_list'] = $this->Page_Database->read_page_information();
			$this->load->view('backend/theme/header');
			$this->load->view('backend/theme/sidebar');
			$this->load->view('backend/page/page_new', $data);
			$this->load->view('backend/theme/footer');
		}
	}
	/*
     * file value and type check during validation
     */
	public function file_check($str)
	{
		$allowed_mime_type_arr = array( 'image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/x-png');
		$mime = get_mime_by_extension($_FILES['page_banner']['name']);
		if (isset($_FILES['page_banner']['name']) && $_FILES['page_banner']['name'] != "") {
			if (in_array($mime, $allowed_mime_type_arr)) {
				return true;
			} else {
				$this->form_validation->set_message('file_check', 'Please select only gif/jpg/png file.');
				return false;
			}
		} else {
			return true;
		}
	}
	// add page data
	public function create_page()
	{
		$this->form_validation->set_error_delimiters('<div class="error">', '</div>');
		$this->form_validation->set_rules('page_name', 'Page Name', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_meta_title', 'Meta Title', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_meta_description', 'Meta Description', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_meta_key_word', 'Key word', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_content', 'Content', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_parent', 'Parent', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_banner', 'Page Banner', 'trim|required|xss_clean|callback_file_check');
		if ($this->form_validation->run() == FALSE) {
			$data['page_list'] = $this->Page_Database->read_page_information();
			$this->load->view('backend/theme/header');
			$this->load->view('backend/theme/sidebar');
			$this->load->view('backend/page/page_new', $data);
			$this->load->view('backend/theme/footer');
		} else {
			$insert_data = array(
				'page_name' => $this->input->post('page_name'),
				'page_content' => $this->input->post('page_content'),
				'page_meta_title' => $this->input->post('page_meta_title'),
				'page_meta_description' => $this->input->post('page_meta_description'),
				'page_meta_key_word' => $this->input->post('page_meta_key_word'),
				'page_parent' => $this->input->post('page_parent'),
				'page_status' => 1
			);
			$update_page = $this->Page_Database->insert_page_information($insert_data);
			if ($update_page) {
				$this->session->set_flashdata('success', 'Page Inserted successfully');
			} else {
				$this->session->set_flashdata('error', "Sorry Can't insert page");
			}
			redirect('admin/page');
		}
	}
	// edit get page details
	public function edit_page()
	{
		if (!isset($this->session->userdata['logged_in'])) {
			$this->load->view('backend/login_page');
		} else {
			$page_id  = $this->input->get('key');
			$data['page_details'] = $this->Page_Database->get_page_information($page_id);
			$data['page_subs'] = $this->Page_Database->get_subpage_information($page_id);
			if (!$data['page_details']) {
				redirect('admin/page');
			}
			$data['page_list'] = $this->Page_Database->read_page_information();
			$this->load->view('backend/theme/header');
			$this->load->view('backend/theme/sidebar');
			$this->load->view('backend/page/pages_edit', $data);
			$this->load->view('backend/theme/footer');
		}
	}
	// update page data
	public function update_page()
	{
		$this->form_validation->set_error_delimiters('<div class="error">', '</div>');
		$this->form_validation->set_rules('page_name', 'Page Name', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_meta_title', 'Meta Title', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_meta_description', 'Meta Description', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_meta_key_word', 'Key word', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_content', 'Content', 'trim|required|xss_clean');
		$this->form_validation->set_rules('page_banner', 'Page Banner', 'trim|xss_clean|callback_file_check');
		$page_id =  $this->input->post('page_id');
		if ($this->form_validation->run() == FALSE) {
			$data['page_details'] = $this->Page_Database->get_page_information($page_id);
			if (!$data['page_details']) {
				redirect('admin/page');
			}
			$data['page_list'] = $this->Page_Database->read_page_information();
			$this->load->view('backend/theme/header');
			$this->load->view('backend/theme/sidebar');
			$this->load->view('backend/page/pages_edit', $data);
			$this->load->view('backend/theme/footer');
		} else {
			$update_data = array(
				'page_name' => $this->input->post('page_name'),
				'page_content' => $this->input->post('page_content'),
				'page_meta_title' => $this->input->post('page_meta_title'),
				'page_meta_description' => $this->input->post('page_meta_description'),
				'page_meta_key_word' => $this->input->post('page_meta_key_word'),
			);
			$file_uploaded = 0;
			// set config for file upload
			$config_main['upload_path']          = './uploads/banners/';
			$config_main['allowed_types']        = 'gif|jpg|png';
			$config_main['max_size']             = 10000;
			$this->load->library('upload', $config_main);
			if ($this->upload->do_upload('page_banner')) {
				$file_uploaded = 1;
				$data_main = $this->upload->data();
				$update_data['page_banner'] = $data_main['file_name'];
			}
			
			$update_page = $this->Page_Database->update_page_information($page_id, $update_data,$file_uploaded);
			// set config for file upload
			$config['upload_path']          = './uploads/banners/';
			$config['allowed_types']        = 'gif|jpg|png';
			$config['max_size']             = 10000;
			// $config['max_width']            = 1024;
			// $config['max_height']           = 768;
			$this->load->library('upload', $config);

			$file_count = 1;
			$result = 1;
			$sub_title = $this->input->post('sub_title');
			$sub_content = $this->input->post('sub_content');
			$sub_id = $this->input->post('sub_id');
			// $countfiles = count($_FILES['sub_file']['name']);
			if (!empty($sub_title) && !empty($sub_content)  && !empty($sub_id)) {
				for ($i = 0; $i < sizeof($sub_id); $i++) {
					if (!$this->upload->do_upload('sub_file_'.$sub_id[$i])) {
						$file_name = '';
					} else {
						$data = $this->upload->data();
						$file_name = $data['file_name'];
					}
					$this->Page_Database->update_subpage_information($sub_title[$i], $sub_content[$i], $sub_id[$i], $file_name);
					$file_count++;
				}
			}
			if ($update_page || $result) {
				$this->session->set_flashdata('success', 'Page Updated successfully');
			} else {
				$this->session->set_flashdata('error', "Sorry Can't update page");
			}
			redirect('admin/page/edit_page?key=' . $page_id);
		}
	}
	// delete page details
	public function delete_page()
	{
		$page_id  = $this->input->get('key');
		$delete_page = $this->Page_Database->delete_page_information($page_id);
		if ($delete_page) {
			$this->session->set_flashdata('success', 'Page deleted successfully');
		} else {
			$this->session->set_flashdata('error', "Sorry Can't delete page");
		}
		redirect('admin/page');
	}
}

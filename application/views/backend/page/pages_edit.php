<!-- Content Wrapper. Contains page content -->
<!-- <script src="https://cdn.ckeditor.com/ckeditor5/12.3.1/classic/ckeditor.js"></script> -->
<link href="https://cdn.jsdelivr.net/npm/froala-editor@3.0.0-beta.1/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
<!-- Include Editor JS files. -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@3.0.0-beta.1//js/froala_editor.pkgd.min.js"></script>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Pages
            <small>edit cms page deteils</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="<?php echo base_url(); ?>admin/home"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class=""><a href="<?php echo base_url(); ?>admin/page">Pages</a></li>
            <li class="active">Edit Page</li>
        </ol>
    </section>

    <!-- Main content -->
    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <?php if ($this->session->flashdata('error')) { ?>
            <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                Sorry , Can't update page details
            </div>
        <?php } else if ($this->session->flashdata('success')) { ?>
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h4><i class="icon fa fa-check"></i> Alert!</h4>
                Sucess , Page details updated
            </div>
        <?php } ?>


        <div class="box">
            <!-- <div class="box-header with-border">
        <h3 class="box-title">Title</h3>
    </div> -->
            <div class="box-body">



                <!-- Start creating your amazing application! -->
                <form role="form" action="<?php echo base_url(); ?>admin/page/update_page" enctype="multipart/form-data" method="POST">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Parent *</label>
                            <select name="page_parent" id="page_parent" class="form-control" disabled>
                                <option value="">Select Parent Page</option>
                                <?php if (sizeof($page_list) > 0) { ?>
                                    <?php foreach ($page_list as $row) { ?>
                                        <option <?php
                                                if ($row->page_id == $page_details[0]->page_parent) {
                                                    echo 'selected';
                                                }
                                                ?> value="<?php echo $row->page_id; ?>"><?php echo $row->page_name; ?></option>
                                    <?php }
                                } ?>
                                <option <?php
                                        if ($page_details[0]->page_parent == 0) {
                                            echo 'selected';
                                        }
                                        ?> value="0">-No Parent Page-</option>
                            </select>
                            <?php echo form_error('page_parent'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Name *</label>
                            <input type="text" class="form-control" name="page_name" id="exampleInputEmail1" placeholder="Enter Name" value="<?php echo $page_details[0]->page_name; ?>">
                            <?php echo form_error('page_name'); ?>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Banner *</label>
                            <input type="file" name="page_banner" id="page_banner">
                            <?php echo form_error('page_banner'); ?>
                        </div>
                        <?php if ($page_details[0]->page_banner != "") { ?>
                            <hr>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Preview</label>
                                <img width="300" src="<?php echo base_url(); ?>uploads/banners/<?php echo $page_details[0]->page_banner; ?>" name="page_banner_pre">
                            </div>
                        <?php } ?>
                        <hr>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Content *</label>
                            <textarea name="page_content" id="editor"><?php echo $page_details[0]->page_content; ?></textarea>
                            <?php echo form_error('page_content'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Meta Title *</label>
                            <input type="text" class="form-control" name="page_meta_title" id="exampleInputEmail1" placeholder="Enter Title" value="<?php echo $page_details[0]->page_meta_title; ?>">
                            <?php echo form_error('page_meta_title'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Meta Description *</label>
                            <input type="text" class="form-control" name="page_meta_description" id="exampleInputEmail1" placeholder="Enter Title" value="<?php echo $page_details[0]->page_meta_description; ?>">
                            <?php echo form_error('page_meta_description'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Meta Keyword *</label>
                            <input type="text" class="form-control" name="page_meta_key_word" id="exampleInputEmail1" placeholder="Enter Title" value="<?php echo $page_details[0]->page_meta_key_word; ?>">
                            <?php echo form_error('page_meta_key_word'); ?>
                        </div>
                        <?php
                        if (sizeof($page_subs) > 0) {
                            $data_temp['sub'] = $page_subs;
                            $this->load->view('backend/page/sub_page_contents', $data_temp);
                        }
                        ?>
                    </div>
                    <!-- /.box-body -->
                    <input type="hidden" id="page_id" name="page_id" value="<?php echo $page_details[0]->page_id; ?>">
                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script>
    new FroalaEditor('#editor')
    var _URL = window.URL || window.webkitURL;
    $("#page_banner").change(function(e) {
        var file, img;
        if ((file = this.files[0])) {
            img = new Image();
            var max_width = "1280";
            var max_height = "401";
            img.src = _URL.createObjectURL(file);
            img.onload = function() {
                if (this.width == max_width && this.height == max_height) {
                    
                } else {
                    alert("invalid image resolution use " + max_width + 'X' + max_height);
                    $('#page_banner').val(null)
                }

            };

        }
    })
</script>
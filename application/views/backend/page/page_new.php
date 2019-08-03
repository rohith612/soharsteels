<!-- Content Wrapper. Contains page content -->
<script src="https://cdn.ckeditor.com/ckeditor5/12.3.1/classic/ckeditor.js"></script>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Pages
            <small>add cms page deteils</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="<?php echo base_url(); ?>admin/home"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class=""><a href="<?php echo base_url(); ?>admin/page">Pages</a></li>
            <li class="active">Add Page</li>
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
                <form role="form" action="<?php echo base_url(); ?>admin/page/create_page" method="POST">
                    <div class="box-body">

                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Parent *</label>
                            <select name="page_parent" id="page_parent" class="form-control">
                                <option value="">Select Parent Page</option>
                                <?php if (sizeof($page_list) > 0) { ?>
                                    <?php foreach ($page_list as $row) { ?>
                                        <option value="<?php echo $row->page_id; ?>"><?php echo $row->page_name; ?></option>
                                    <?php }
                                } ?>
                                <option value="0">-No Parent Page-</option>
                            </select>
                            <?php echo form_error('page_parent'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Name *</label>
                            <input type="text" class="form-control" name="page_name" id="exampleInputEmail1" placeholder="Enter Name" value="">
                            <?php echo form_error('page_name'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Banner *</label>
                            <input type="file" name="page_banner" id="page_banner">
                            <?php echo form_error('page_banner'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Content *</label>
                            <textarea name="page_content" id="editor"></textarea>
                            <?php echo form_error('page_content'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Meta Title *</label>
                            <input type="text" class="form-control" name="page_meta_title" id="exampleInputEmail1" placeholder="Enter Title" value="">
                            <?php echo form_error('page_meta_title'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Meta Description *</label>
                            <input type="text" class="form-control" name="page_meta_description" id="exampleInputEmail1" placeholder="Enter Title" value="">
                            <?php echo form_error('page_meta_description'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Page Meta Keyword *</label>
                            <input type="text" class="form-control" name="page_meta_key_word" id="exampleInputEmail1" placeholder="Enter Title" value="">
                            <?php echo form_error('page_meta_key_word'); ?>
                        </div>

                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary">Create</button>
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
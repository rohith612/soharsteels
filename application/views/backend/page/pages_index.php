<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Pages
            <small>update your page cms here,</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="<?php echo base_url(); ?>admin/home"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Page</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <?php if ($this->session->flashdata('error')) { ?>
            <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                Sorry , Can't update page informations
            </div>
        <?php } else if ($this->session->flashdata('success')) { ?>
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h4><i class="icon fa fa-check"></i> Alert!</h4>
                Sucess , Page information updated
            </div>
        <?php } ?>


        <div class="box">
            <!-- <div class="box-header with-border">
                <h3 class="box-title">Title</h3>
            </div> -->
            <div class="box-body">
                <!-- Start creating your amazing application! -->

                <div class="column">
                    <div class="row">
                        <!-- <div class="col-md-12">
                            <a href="<?php echo base_url(); ?>admin/page/new_page" class="btn btn-primary">Add New</a>
                        </div> -->
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Page Name</th>
                                        <th>Page Keyword</th>
                                        <th>Page Title</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php if (sizeof($page_list) > 0) { ?>
                                        <?php $loop = 1;
                                        foreach ($page_list as $row) { ?>
                                            <tr>
                                                <td><?php echo $loop++; ?></td>
                                                <td><?php echo $row->page_name; ?></td>
                                                <td><?php echo $row->page_meta_key_word; ?></td>
                                                <td><?php echo $row->page_meta_title; ?></td>
                                                <td>
                                                    <a href="<?php echo base_url(); ?>admin/page/edit_page?key=<?php echo $row->page_id; ?>" class="btn btn-link">Edit</a>
                                                    <!--
                                                            <form method="POST" action="<?php echo base_url(); ?>admin/page/delete_page?key=<?php echo $row->page_id; ?>" accept-charset="UTF-8" style="display:inline">

                                                                <button type="submit" class="btn btn-link" title="Delete Page" onclick="return confirm('Are you sure?')">Delete</button>

                                                            </form>
                                                -->
                                                </td>
                                            </tr>
                                        <?php } ?>
                                    <?php } else { ?>
                                        <tr>
                                            <td colspan="5">
                                                <center><label>No pages Found</label></center>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
            <!-- /.box-body -->
            <!-- <div class="box-footer">
                Footer
            </div> -->
            <!-- /.box-footer-->
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
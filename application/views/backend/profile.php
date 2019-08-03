<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Profile
            <small>update your profile here,</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="<?php echo base_url(); ?>admin/home"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Profile</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <?php if ($this->session->flashdata('error')) { ?>
            <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                Sorry , Can't update profile
            </div>
        <?php } else if ($this->session->flashdata('success')) { ?>
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h4><i class="icon fa fa-check"></i> Alert!</h4>
                Sucess , Profile updated
            </div>
        <?php } ?>


        <div class="box">
            <!-- <div class="box-header with-border">
                <h3 class="box-title">Title</h3>
            </div> -->
            <div class="box-body">



                <!-- Start creating your amazing application! -->
                <form role="form" action="<?php echo base_url(); ?>admin/profile/update_profile" method="POST">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Profile Name</label>
                            <input type="text" class="form-control" name="name" id="exampleInputEmail1" placeholder="Enter Name" value="<?php echo $profile[0]->user; ?>">
                            <?php echo form_error('name'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" name="email" id="exampleInputEmail1" placeholder="Enter email" value="<?php echo $profile[0]->user_name; ?>">
                            <?php echo form_error('email'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">New Password</label>
                            <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            <?php echo form_error('password'); ?>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" name="passconf" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            <?php echo form_error('passconf'); ?>
                        </div>
                    </div>
                    <!-- /.box-body -->

                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
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
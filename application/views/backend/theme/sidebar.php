<!-- Left side column. contains the sidebar -->
<aside class="main-sidebar">
  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">
    <!-- Sidebar user panel -->
    <div class="user-panel">
      <div class="pull-left image">
        <img src="<?php echo base_url(); ?>template/backend/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
      </div>
      <div class="pull-left info">
        <p> <?php
            echo ($this->session->userdata['logged_in']['name']);
            ?></p>
        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
      </div>
    </div>
    <!-- sidebar menu: : style can be found in sidebar.less -->
    <ul class="sidebar-menu" data-widget="tree">
      <li class="header">MAIN NAVIGATION</li>
      <li class="<?php
                  if ($this->uri->segment(2) == 'home') {
                    echo 'active';
                  }
                  ?>"><a href="<?php echo base_url(); ?>admin/home"><i class="fa fa-book"></i> <span>Dashboard</span></a></li>
      <li class="treeview <?php
                          if ($this->uri->segment(2) == 'page') {
                            echo 'active';
                          }
                          ?>">
        <a href="#">
          <i class="fa fa-files-o"></i>
          <span>CMS</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu">
          <li class="<?php
                      if ($this->uri->segment(2) == 'page') {
                        echo 'active';
                      }
                      ?>"><a href="<?php echo base_url(); ?>admin/page"><i class="fa fa-circle-o"></i>Pages</a></li>
        </ul>
      </li>
    </ul>
  </section>
  <!-- /.sidebar -->
</aside>
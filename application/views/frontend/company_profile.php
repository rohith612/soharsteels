<div class="img" style="background-image: url(<?php echo base_url() . 'uploads/banners/' . $contents[0]->page_banner; ?>); top: 0px;"></div>
<?php echo $contents[0]->page_content; ?>
<div class="blog-list_i clearfix">


    <?php if (sizeof($sub_contents) > 0) { ?>
        <?php foreach ($sub_contents as $row) { ?>
            <?php if (($row->id % 2) != 0) { ?>
                <div class="row clearfix">
                <?php } ?>
                <a href="#" class="item visible">
                    <div class="title"><?php echo $row->sub_content_title; ?></div>
                    <div class="img" style="height:auto">
                        <img src=" <?php echo base_url() . 'uploads/banners/' . $row->sub_content_image; ?>" alt="" class="mCS_img_loaded">

                        <span class="bt inv" style="width: 355px;"></span>
                        <span class="bb inv" style="width: 355px;"></span>
                        <span class="br inv" style="height: 112px;"></span>
                        <span class="bl inv" style="height: 112px;"></span>
                    </div>

                    <div class="text">
                        <?php echo $row->sub_contents; ?>
                    </div>
                </a>
                <?php if (($row->id % 2) == 0) { ?>
                </div>
            <?php } ?>

        <?php } ?>
    <?php } ?>


</div>
<a class="btn-top" href="#"><i class="icon-right"></i><i class="icon-right-hover hover"></i></a>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
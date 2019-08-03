<hr>
<label for="">Page Sub Contents</label>
<hr>
<table class="table table-bordered">
    <tbody>
        <?php $loops = 1;
        foreach ($sub as $row) { ?>
            <tr>
                <td>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Content Title</label>
                        <input type="text" class="form-control" name="sub_title[]" value="<?php echo $row->sub_content_title; ?>">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Content</label>
                        <textarea id="subCntent" class="form-control editor" name="sub_content[]" rows="5"><?php echo $row->sub_contents; ?></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Image Cover</label>
                        <img width=150 src="<?php echo base_url() ?>/uploads/banners/<?php echo $row->sub_content_image; ?>">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Image Upload</label>
                        <input type="file" name="sub_file_<?php echo $row->id; ?>">
                    </div>
                    <input type="hidden" name="sub_id[]" value="<?php echo $row->id; ?>">
                    <?php $loops++; ?>
                </td>
                </td>
            </tr>
        <?php } ?>
    </tbody>
</table>

<script>
    // var allEditors = document.querySelectorAll('.editor');
    // for (var i = 0; i < allEditors.length; ++i) {
    //     new FroalaEditor(allEditors[i])
    // }
</script>
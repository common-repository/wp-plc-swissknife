jQuery(document).ready(function($) {
    /**
     * Show first page
     */
    $('article.plc-admin-page-gdprsettings').show();

    /**
     * Ajax based navigation
     */
    $('nav.plc-admin-menu ul li a').on('click',function() {
        var sPage = $(this).attr('href').substring('#/'.length);

        $('article.plc-admin-page').hide();
        $('article.plc-admin-page-'+sPage).show();

        return false;
    });

    /**
     * Ajax based settings toggle
     */
    $('input.plc-swissknife-ajax-checkbox').on('change',function() {
        var sName = $(this).attr('name');
        var sVal = 0;
        if($(this).is(':checked')) {
            sVal = 1;
        }

        // show we are working
        $('.plc-admin-alert-container').html('<img src="'+oSwissKnife.plugin_url+'/assets/img/ajax-loader.gif" style="position: absolute;" />');

        // update setting
        $.post(oSwissKnife.ajax_url,{action: 'save_swissknife_setting',setting_name:sName,setting_val:sVal},function(retVal) {
           $('.plc-admin-alert-container').html(retVal);
        });
    });

    /**
     * Hide Limit Revisions if disabled
     */
    $('input[name="wpplc_swissknife_disable_revisions"]').on('change',function() {
        if($(this).is(':checked')) {
            $('input[name="wpplc_swissknife_limit_revisions"]').parent('div').hide();
        } else {
            $('input[name="wpplc_swissknife_limit_revisions"]').parent('div').show();
        }
    });
});

  
  /**
   *
   */


  cdb.admin.organization.Form = cdb.core.View.extend({

    _TEXTS: {
      delete: {
        title: _t("Delete <%= current_username %>'s account"),
        description: _t("You are about to delete <%= current_username %> account. Doing so will delete all tables and visualizations. Are you sure?"),
        ok: _t("Yes, do it")
      }
    },

    events: {
      'click .delete':        '_onDeleteClick',
      'click .change_quota':  '_onChangeQuotaClick'
    },

    initialize: function() {
      this._initViews();
    },

    _initViews: function() {

      // 
      if () {

      }

      // 
      if () {

      }

    },

    _onChangeQuotaClick: function() {

    },

    _onDeleteClick: function(e) {
      if (e) e.preventDefault();
      var href = $(e.target).attr('href');
      var self = this;

      var dlg = new cdb.admin.BaseDialog({
        title: _.template(this._TEXTS.delete.title)({ current_username: this.options.current_username}),
        description: _.template(this._TEXTS.delete.description)({ current_username: this.options.current_username}),
        template_name: 'common/views/confirm_dialog',
        clean_on_hide: true,
        enter_to_confirm: true,
        ok_button_classes: "right button grey",
        ok_title: this._TEXTS.delete.ok,
        cancel_button_classes: "underline margin15",
        modal_type: "error",
        width: 500
      });

      // CACA DE LA VACA
      dlg.ok = function() {
        $.ajax({
          url: href,
          type:'DELETE',
          done: function(r) {
            window.location.href = "/organization"
          }
        }) 
      }

      dlg
        .appendToBody()
        .open();
    }

  });
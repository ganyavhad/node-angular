myApp.service("TemplateService", function() {
  this.init = function() {
    this.header = "view/template/header.html";
    this.content = "view/content/content.html";
    this.footer = "view/template/footer.html";
  };

  this.changecontent = function(page) {
    this.init();
    var data = this;
    data.content = "view/content/" + page + ".html";
    return data;
  };
  this.init();
});

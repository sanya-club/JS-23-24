define(['jquery', 'tmpl', 'model', 'view'], function () {
  var Controller = function (model, view) {
    var self = this;
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('click', '.item-edit', editItem);

    function addItem() {
      var newItem = view.elements.input.val();
      model.addItem(newItem);
      view.renderList(model.data);
      view.elements.input.val('');
    }

    function removeItem() {
      var item = $(this).attr('data-value');
      model.removeItem(item);
      view.renderList(model.data);
    }

    function editItem() {
      var item = $(this).attr('data-value');
      var newVal = prompt('Редактировать элемент списка', item);
      model.editItem(item, newVal);
      view.renderList(model.data);
      return false;
    }
  };
  return Controller;
});
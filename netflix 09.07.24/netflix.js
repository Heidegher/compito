document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownSearch = document.getElementById('dropdownSearch');
    const dropdownItems = document.getElementById('dropdownItems');
    const items = dropdownItems.getElementsByClassName('dropdown-item');
  
    dropdownSearch.addEventListener('input', function() {
      const filter = this.value.toLowerCase();
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
  
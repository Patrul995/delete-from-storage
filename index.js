let goods = [
    {
      product_name: "Kişi köynəyi",
      product_description: "Mavi rəngdə, 100% pamuk",
      product_price: 50,
      store_name: "Moda Dünyası",
      store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
      product_name: "Qadın bluzası",
      product_description: "Dəri detallı, qara rəngdə",
      product_price: 60,
      store_name: "Moda Dünyası",
      store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
      product_name: "Kişi pantolonu",
      product_description: "Qəhvəyi rəng, kənar cebi",
      product_price: 75,
      store_name: "Moda Dünyası",
      store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
      product_name: "Qadın eteyi",
      product_description: "Qırmızı rəng, mini",
      product_price: 40,
      store_name: "Moda Dünyası",
      store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
      product_name: "Kişi dəsmalı",
      product_description: "Nəqşdar dizayn",
      product_price: 20,
      store_name: "Moda Dünyası",
      store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
      product_name: "Qadın çantası",
      product_description: "Əlgötürən, dəri",
      product_price: 90,
      store_name: "Moda Dünyası",
      store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    }]



function showList() {
    const goodsContainer = document.getElementById('goods-container');
    goodsContainer.innerHTML = ''; 
  

    let goodsList = JSON.parse(localStorage.getItem('goods')) || goods;
  
    goodsList.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'product';
      itemDiv.innerHTML = `
        <h3>${item.product_name}</h3>
        <p>${item.product_description}</p>
        <p>Цена: ${item.product_price} manat</p>
        <button onclick="removeItem(${index})">Удалить</button>
      `;
      goodsContainer.appendChild(itemDiv);
    });
  }

  function removeItem(index) {
    let goodsList = JSON.parse(localStorage.getItem('goods')) || goods;
    goodsList.splice(index, 1); 
    localStorage.setItem('goods', JSON.stringify(goodsList)); 
    showList();
  }
  
  if (!localStorage.getItem('goods')) {
    localStorage.setItem('goods', JSON.stringify(goods));
  }
  
  showList();
  
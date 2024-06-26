import { defineStore } from 'pinia';

export const useItemsStore = defineStore('itemsStore', {
  state: () => ({
    orderBy: 'none',
    filterBy: 'none',
    items: [
      {
        id: '1',
        name: 'Ручка дверная',
        code: 'L422WH',
        price: {
          old_price: 400,
          current_price: 355,
        },
        image: {
          url: '/pic/pic1.png',
        },
        material: 1,
      },
      {
        id: '2',
        name: 'Ручка, нержавеющ сталь',
        code: 'L423WH',
        price: {
          old_price: 400.9,
          current_price: 355.555,
        },
        image: {
          url: '/pic/pic2.png',
        },
        material: 2,
      },
      {
        id: '3',
        name: 'Стандартные петли',
        code: 'P424WN',
        price: {
          old_price: null,
          current_price: 75,
        },
        image: {
          url: '/pic/pic3.png',
        },
        material: 2,
      },
      {
        id: '4',
        name: 'Петля со стопором',
        code: 'PW5AC',
        price: {
          old_price: 270,
          current_price: 200,
        },
        image: {
          url: '/pic/pic4.png',
        },
        material: 2,
      },
      {
        id: '5',
        name: 'Ручка дверная',
        code: 'LM352',
        price: {
          old_price: null,
          current_price: 720,
        },
        image: {
          url: '/pic/pic1.png',
        },
        material: 1,
      },
      {
        id: '6',
        name: 'Ручка, нержавеющ сталь',
        code: null,
        price: {
          old_price: null,
          current_price: 355.555,
        },
        image: {
          url: '/pic/pic2.png',
        },
        material: 2,
      },
      {
        id: '7',
        name: 'Стандартные петли',
        code: 'WD14LK',
        price: {
          old_price: null,
          current_price: 75,
        },
        image: {
          url: '/pic/pic3.png',
        },
        material: 2,
      },
      {
        id: '8',
        name: 'Петля со стопором',
        code: null,
        price: {
          old_price: 1200,
          current_price: 900,
        },
        image: {
          url: '/pic/pic4.png',
        },
        material: 2,
      },
    ],
    materials: [
      {
        id: '1',
        name: 'Дерево',
      },
      {
        id: '2',
        name: 'Металл',
      },
    ],
  }),
  getters: {
    sortedByPrice() {
      if (this.orderBy === 'ascending') {
        return [...this.items].sort(
          (a, b) => a.price.current_price - b.price.current_price
        );
      } else if (this.orderBy === 'descending') {
        return [...this.items].sort(
          (a, b) => b.price.current_price - a.price.current_price
        );
      } else {
        return this.items;
      }
    },
    sortedAndFliteredItems() {
      if (this.filterBy === 'none') {
        return this.sortedByPrice;
      } else {
        return this.sortedByPrice.filter(
          (item) => item.material === Number(this.filterBy)
        );
      }
    },
  },
  actions: {
    setOrder(order) {
      this.orderBy = order;
    },
    setFilter(filter) {
      this.filterBy = filter;
    },
  },
});

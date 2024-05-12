<script setup>
import { useItemsStore } from './stores/ItemsStore';

import Card from './components/Card.vue';

const itemsStore = useItemsStore();

const handleSortSelect = (event) => {
  itemsStore.setOrder(event.target.value);
};

const handleFilterSelect = (event) => {
  itemsStore.setFilter(event.target.value);
};
</script>

<template>
  <div class="container">
    <header class="header">
      <nav class="header__navbar">
        <ul class="header__navbar__list">
          <a class="header__navbar__list__link text_xl_gray" href="#">
            <li>Главная</li>
          </a>
          <a class="header__navbar__list__link text_xl_gray" href="#">
            <li>Системы хранения</li>
          </a>
          <a class="header__navbar__list__link text_xl" href="#">
            <li>Комплекты стеллажных систем</li>
          </a>
        </ul>
      </nav>
      <h1 class="header__label text_xxl">Комплекты стеллажных систем</h1>
    </header>
    <div class="filters">
      <div class="filters__section">
        <span class="filters__section__label text_md_gray"
          >Сортировать по:</span
        >
        <div class="filters__section__container">
          <select
            @change="handleSortSelect"
            class="filters__section__container__select text_lg"
          >
            <option value="none">Не выбрано</option>
            <option value="ascending">Цена по возрастанию</option>
            <option value="descending">Цена по убыванию</option>
          </select>
          <div class="filters__section__container__icon">
            <img src="/icons/arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="filters__section">
        <span class="filters__section__label text_md_gray">Материал:</span>
        <div class="filters__section__container">
          <select
            @change="handleFilterSelect"
            class="filters__section__container__select text_lg"
          >
            <option value="none">Не выбрано</option>
            <option
              v-for="material in itemsStore.materials"
              :key="material.id"
              :value="material.id"
            >
              {{ material.name }}
            </option>
          </select>
          <div class="filters__section__container__icon">
            <img src="/icons/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="cardList">
      <Card
        v-for="item in itemsStore.sortedAndFliteredItems"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :code="item.code"
        :oldPrice="item.price.old_price"
        :currentPrice="item.price.current_price"
        :url="item.image.url"
        :material="item.material"
      />
    </div>
  </div>
</template>

<style scoped>
/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
/* @media (min-width: 768px) {} */

/* lg */
/* @media (min-width: 1024px) {} */

/* xl */
/* @media (min-width: 1280px) {} */

/* 2xl */
/* @media (min-width: 1536px) {} */

.container {
  max-width: 1488px;
  margin: auto;
  padding: 32px 16px 103px;
}

.header__navbar {
  margin-top: 32px;
  margin-bottom: 32px;
}

.header__navbar__list {
  list-style: none;
  gap: 8px;
  display: flex;
}

.header__navbar__list__link {
  text-decoration: none;
}

.header__navbar__list a:not(:last-child) li::after {
  content: '/';
  margin-left: 8px;
}

.header__label {
  margin-bottom: 32px;
}

.filters {
  margin-bottom: 41px;
  display: flex;
  gap: 24px;
}

.filters__section {
  display: flex;
  flex-direction: column;
}

.filters__section__label {
  margin-left: 16px;
  margin-bottom: 6px;
}

.filters__section__container {
  display: flex;
  justify-content: center;
  position: relative;
}

.filters__section__container__select {
  width: 288px;
  padding: 9px 16px;
  appearance: none;
  background-color: var(--gray-color);
  border: none;
}

.filters__section__container__select:hover {
  cursor: pointer;
}

.filters__section__container__icon {
  height: 100%;
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cardList {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  gap: 40px 48px;
}

@media (max-width: 1280px) {
  .cardList {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 1024px) {
  .cardList {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 768px) {
  .cardList {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .filters {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
}

@media (max-width: 640px) {
  .header__navbar__list {
    flex-direction: column;
  }
}
  
</style>

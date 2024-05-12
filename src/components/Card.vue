<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
  id: String,
  name: String,
  code: String,
  oldPrice: Number,
  currentPrice: Number,
  url: String,
  material: Number,
});

const isCartClicked = ref(false);
const isHeartClicked = ref(false);

const handleClick = (type) => {
  const itemId = `${props.id}${type}`;

  if (localStorage.getItem(itemId)) {
    localStorage.removeItem(itemId);
  } else {
    localStorage.setItem(itemId, true);
  }

  if (type === 'cart') {
    isCartClicked.value = !isCartClicked.value;
  }
  if (type === 'heart') {
    isHeartClicked.value = !isHeartClicked.value;
  }
};

onMounted(() => {
  isCartClicked.value = localStorage.getItem(`${props.id}cart`);
  isHeartClicked.value = localStorage.getItem(`${props.id}heart`);
});
</script>

<template>
  <div class="card">
    <div v-if="oldPrice" class="card__pic__discount">
      <span class="card__pic__discount__text text_lg_medium_white">
        Скидка
      </span>
    </div>
    <div class="card__pic">
      <img class="card__pic__img" :src="url" width="238" height="237" />
    </div>
    <div class="card__info">
      <span class="card__info__code text_sm_gray"> {{ code }}</span>
      <span class="card__info__name text_xl_medium"> {{ name }}</span>
      <div class="card__info__prices">
        <span
          v-if="oldPrice"
          class="card__info__prices__oldPrice text_xl_gray_crossed"
        >
          {{ Math.trunc(oldPrice) + '₽' }}</span
        >
        <span class="card__info__prices__currentPrice text_xl">
          {{ Math.trunc(currentPrice) + '₽' }}</span
        >
      </div>
    </div>
    <img
      @click="handleClick('cart')"
      :src="isCartClicked ? '/icons/circle-checked.svg' : '/icons/cart.svg'"
      class="card__cart"
      width="21"
      height="21"
      alt=""
    />
    <img
      @click="handleClick('heart')"
      :src="isHeartClicked ? '/icons/heart-checked.svg' : '/icons/heart.svg'"
      class="card__heart"
      width="21"
      height="21"
      alt=""
    />
  </div>
</template>

<style scoped>
.card {
  width: 336px;
  height: 352px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #eeeeee;
  background-color: #ffffff;
  padding: 10px 12px;
  transition: all 0.3s;
}

.card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.card__pic {
  display: flex;
}

.card__pic__discount {
  position: absolute;
  top: 8px;
  left: 0;
  background-color: #eb5757;
  padding: 3px 16px;
}

.card__pic__img {
  margin: 9px auto 23px;
}

.card__info {
  display: flex;
  flex-direction: column;
}

.card__info__prices {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.card__cart {
  position: absolute;
  bottom: 4px;
  right: 61px;
  margin: 7px;
}

.card__heart {
  position: absolute;
  bottom: 4px;
  right: 14px;
  margin: 7px;
}

.card__cart:hover,
.card__heart:hover {
  cursor: pointer;
}
</style>

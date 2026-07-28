<template>
  <div >
    <div class="top-header-card">
      <div class="header-content">
        <div class="greeting-section">
          <div class="greeting-row">
            <v-img
              :src="require('@/assets/img/icons/Vector.png')"
              class="greeting-icon"
    
              contain
            />
            <span class="greeting-text">{{ greeting }}</span>
          </div>
          <h1 class="user-name">{{ userName }}</h1>
        </div>
        <v-btn icon class="cart-btn " @click="$emit('cart')">
          <v-img
            :src="require('@/assets/img/icons/Buy.png')"
            class="cart-icon"
            contain
          />
        </v-btn>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  emits: ["cart"],
  props: {
    userName: {
      type: String,
      default: "Alena Sabyan",
    },
  },
  data() {
    return {
      currentTime: new Date(),
    };
  },
  computed: {
    hour() {
      return this.currentTime.getHours();
    },
    greeting() {
      const h = this.hour;
      if (h >= 5 && h < 12) {
        return "Good Morning";
      } else if (h >= 12 && h < 17) {
        return "Good Afternoon";
      } else {
        return "Good Evening";
      }
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.currentTime = new Date();
    }, 60000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="scss" scoped>


.home-label {
  color: #b0bec5;
  font-family: "Sofia Pro", "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 500;
  padding: 20px 20px 12px 20px;
  letter-spacing: 0.5px;
  margin: 0;
}

.top-header-card {
  width: 100%;
  background: transparent;
  padding: 28px 0 0px 0;
}

.header-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.greeting-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.greeting-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 7px;
}

.greeting-icon {
  width: 18px !important;
  height: 18px !important;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.greeting-text {
  color: #1a2b3c;
  font-family: "Sofia Pro", "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 145%;
}

.user-name {
  color: #0a2533;
  font-family: "Sofia Pro", "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.5px;
  text-align: left;
}

.cart-btn {
  background: transparent !important;
  width: 18.5px !important;
  height: 18.0px !important;
  border-radius: 16px !important;
  box-shadow: none !important;
  margin-top: 0px;
  flex-shrink: 0;

  &:hover {
    background: #f5f5f5 !important;
  }
}

.cart-icon {
  width: 20px !important;
  height: 20px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

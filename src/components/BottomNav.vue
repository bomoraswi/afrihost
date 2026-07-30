<template>
  <div class="bottom-nav-wrapper">
    <div class="bottom-nav">
      <div class="nav-items">
        <div class="nav-item-wrapper">
          <v-btn class="nav-btn" value="home" @click="$emit('navigate', 'home')">
            <img src="@/assets/img/menu/Home.png" class="nav-img active" alt="Home" width="19" height="20" />
          </v-btn>
          <div class="active-indicator"></div>
        </div>

        <v-btn class="nav-btn" value="search" @click="$emit('navigate', 'search')">
          <img src="@/assets/img/menu/Search.png" class="nav-img" alt="Search" />
        </v-btn>

        <div class="center-spacer"></div>

        <v-btn class="nav-btn" value="notifications" @click="$emit('navigate', 'notifications')">
          <img src="@/assets/img/menu/Notification.png" class="nav-img" alt="Notifications" />
        </v-btn>

        <v-btn class="nav-btn" value="profile" @click="$emit('navigate', 'profile')">
          <img src="@/assets/img/menu/Profile.png" class="nav-img" alt="Profile" />
        </v-btn>
      </div>

      <div class="center-btn-wrapper">
        <v-btn fab class="center-fab" @click="$emit('navigate', 'create')">
          <img src="@/assets/img/menu/Chef.png" class="nav-img-center" alt="Create" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  emits: ["navigate"],
};
</script>

<style lang="scss" scoped>
.bottom-nav-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
}

.bottom-nav {
  position: relative;
  height: 83px;
  background: white;
  border-radius: 36px 36px 0 0;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.08);
  overflow: visible;
  width: 100%;
}

.bottom-nav::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 56px;
  background-color: #F8F9FA;
  border-bottom-left-radius: 110px;
  border-bottom-right-radius: 110px;
  z-index: 0;
}

.nav-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 24px 10px 24px;
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
}

.nav-item-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-btn {
  background: transparent !important;
  box-shadow: none !important;
  width: 56px;
  height: 56px;
  margin: 0;
  border-radius: 50%;

  &:hover {
    background: rgba(93, 185, 180, 0.08) !important;
  }
}

.nav-img {
  width: 219x;
  height: 20px;
  object-fit: contain;
  opacity: 0.55;
  transition: opacity 0.2s ease;

  &.active {
    opacity: 1;
  }
}

.nav-img-center {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.center-spacer {
  width: 100px;
}

.center-btn-wrapper {
  position: absolute;
  top: -36px;
  left: 50%;
  transform: translateX(-50%);
}

.center-fab {
  width: 74px !important;
  height: 74px !important;
  background-color: #073030 !important;
  border-radius: 50%;

  &:hover {
    background-color: #0a3d3c !important;
  }
}

.active-indicator {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 4px;
  background-color: #b7dfdd;
  border-radius: 2px;
}
</style>
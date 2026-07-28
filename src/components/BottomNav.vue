<template>
  <div class="bottom-nav-wrapper">
    <div class="bottom-nav">
      <div class="nav-items">
        <div class="nav-item-wrapper">
          <v-btn class="nav-btn" value="home" @click="$emit('navigate', 'home')">
            <v-icon class="nav-icon active">mdi-home</v-icon>
          </v-btn>
          <div class="active-indicator"></div>
        </div>

        <v-btn class="nav-btn" value="search" @click="$emit('navigate', 'search')">
          <v-icon class="nav-icon">mdi-magnify</v-icon>
        </v-btn>

        <div class="center-spacer"></div>

        <v-btn class="nav-btn" value="notifications" @click="$emit('navigate', 'notifications')">
          <v-icon class="nav-icon">mdi-bell-outline</v-icon>
        </v-btn>

        <v-btn class="nav-btn" value="profile" @click="$emit('navigate', 'profile')">
          <v-icon class="nav-icon">mdi-account-outline</v-icon>
        </v-btn>
      </div>

      <div class="center-btn-wrapper">
        <v-btn fab class="center-fab" @click="$emit('navigate', 'create')">
          <v-icon large class="text-white">mdi-chef-hat</v-icon>
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
  height: 96px;
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
  background-color: #f8f9fa;
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

.nav-icon {
  color: #9aa8b5;
  font-size: 28px !important;
  transition: color 0.2s ease;

  &.active {
    color: #5db9b4;
  }
}

.center-spacer {
  width: 100px;
}

.center-btn-wrapper {
  position: absolute;
  top: -36px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.center-fab {
  width: 74px !important;
  height: 74px !important;
  background-color: #073030 !important;
  box-shadow: 0 12px 32px rgba(7, 48, 48, 0.45) !important;
  border-radius: 50%;

  &:hover {
    background-color: #0a3d3c !important;
  }

  ::v-deep .v-icon {
    font-size: 34px !important;
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

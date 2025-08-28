<template>
  <header class="toolbar">
    <div class="toolbar-left">
      <div class="form-field">
        <div class="icon-circle">
          <i class="bx bx-search"></i>
        </div>
        <input type="text" placeholder="Search" id="search" />
      </div>
    </div>
    <div class="toolbar-center">
      <img src="../asserts/logo-rcrm.png" />
    </div>
    <div class="toolbar-right">
      <div class="toolbar-icons">
        <div class="icon-circle">
          <i class="bx bx-plus"></i>
        </div>
        <div class="custom-separator"></div>
        <div class="icon-circle">
          <i class="bx bx-gift"></i>
        </div>
        <div class="icon-circle">
          <i class="bx bx-envelope"></i>
        </div>
        <div class="icon-circle">
          <i class="bx bx-bell"></i>
        </div>
      </div>

      <div class="profile-section">
        <div class="icon-circle">
          <img src="../asserts/profilePhoto.jpg" alt="profile pic" />
        </div>
        <div class="profile-info">
          <span class="user-name">Phyllis Yang</span>
          <span class="company-name">Silicon Links Inc</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '../styles/top-header.scss';
</style>

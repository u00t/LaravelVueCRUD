<template>
  <nav class="c-navbar c-navbar--light">
      <div class="c-navbar__left">
          <a role="button" class="c-navbar__item u-hiddenUp@md" v-toggle:sidebar>
              <i class="i-menu i-menu--light"></i>
          </a>
          <drop class="c-navbar__item">
              <a role="button" slot="trigger">
                  New<i class="i-caret i-caret--light u-ml-5"></i>
              </a>
              <drop-content slot="content">
                  <ul class="c-nav c-nav--menus">
                      <li class="c-nav__item">
                          <a href="#" class="c-nav__link">Article</a>
                      </li>
                      <li class="c-nav__item">
                          <a href="#" class="c-nav__link">Mail</a>
                      </li>
                      <li class="c-nav__item">
                          <a href="#" class="c-nav__link">Event</a>
                      </li>
                      <drop tag="li" class="c-nav__item">
                          <a href="#" class="c-nav__link" slot="trigger">Task</a>
                          <drop-content placement="right-start" slot="content">
                              <ul class="c-nav c-nav--menus">
                                  <li class="c-nav__item">
                                      <a href="#" class="c-nav__link">Today</a>
                                  </li>
                                  <li class="c-nav__item">
                                      <a href="#" class="c-nav__link">Latter</a>
                                  </li>
                                  <li class="c-nav__item">
                                      <a href="#" class="c-nav__link">Inbox</a>
                                  </li>
                              </ul>
                          </drop-content/>
                      </drop>
                      <li class="c-nav__item">
                          <a href="#" class="c-nav__link">Contact</a>
                      </li>
                  </ul>
              </drop-content>
          </drop>
      </div>
      <!-- END .c-navbar__left -->
      <div class="c-navbar__right">
          <div class="c-navbar__item u-hiddenDown@md">
              <form action="/" class="c-navbar__form">
                  <div class="form-control has-iconRight">
                        <i class="icon-search form-iconRight u-mr-5"></i>
                        <input type="text" class="form-input form-input--rounded">
                  </div>
              </form>
          </div>
          <!-- END .c-navbar__item -->
          <a class="c-navbar__item">
              <i class="icon-bell2"></i>
          </a>
          <!-- END .c-nav__item -->
          <a class="c-navbar__item">
              <i class="icon-envelop3"></i>
          </a>
          <!-- END .c-nav__item -->
          <drop class="c-navbar__item">
              <a role="button" class="c-account" slot="trigger">
                  <div class="c-account__media">
                      <img src="../../images/avatar.jpg" class="avatar">
                  </div>
                  <div class="c-account__after">
                      <i class="i-caret i-caret--light"></i>
                  </div>
              </a>
              <drop-content placement="bottom-end" slot="content">
                  <ul class="c-nav c-nav--menus">
                      <li class="c-nav__item">
                          <a href="#" class="c-nav__link">Profile</a>
                      </li>
                      <li class="c-nav__item">
                          <a href="#" class="c-nav__link">Inbox</a>
                      </li>
                      <li class="c-nav__divider"></li>
                      <li class="c-nav__item">
                          <a href="#" class="c-nav__link">Log out</a>
                      </li>
                  </ul>
              </drop-content>
          </drop>
      </div>
  </nav>
</template>

<script>

export default {
}
</script>

<style type="text/css">
  .c-navbar--light .c-navbar__item {
    color: rgba(255, 255, 255, 0.9) !important;
  }
</style>
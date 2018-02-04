<template>
  <div class="l-level__right">
    <div class="l-level__item">
      <nav class="c-pagination c-pagination--bordered">
        <span v-if="isOnFirstPage" class="c-pagination__item is-disabled">Prev</span>
        <a v-else href="" @click.prevent="loadPage('next')" class="c-pagination__item">Prev</a>

        <template v-if="notEnoughPages">
          <a v-for="n in totalPage" @click.prevent="loadPage(n)" v-html="n" class="c-pagination__item" :class="{'is-active': isCurrentPage(n)}"></a>
        </template>
        <template v-else>
          <a v-for="n in windowSize" @click.prevent="loadPage(windowStart+n-1)" v-html="windowStart+n-1" class="c-pagination__item" :class="{'is-active': isCurrentPage(windowStart+n-1)}"></a>
        </template>

        <span v-if="isOnLastPage" class="c-pagination__item is-disabled">Next</span>
        <a v-else href="" @click.prevent="loadPage('next')" class="c-pagination__item">Next</a>
      </nav>
    </div>
  </div>
</template>

<script>
import VuetablePaginationMixin from 'vuetable-2/src/components/VuetablePaginationMixin'
export default {
  mixins: [VuetablePaginationMixin]
}
</script>
<script lang="ts" setup>
defineProps({
  opposite: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  color: {
    type: String as PropType<string>,
    default: '#FFFFFF',
  }
})
</script>
<template>
  <div class="flex items-center justify-center w-full">
    <div class="section-title">
    <div :class="opposite ? `last` : `first`">
      <svg xmlns="http://www.w3.org/2000/svg" width="201.041" height="82.453" viewBox="0 0 201.041 83" class="max-lg:w-[142px] max-lg:h-[58px]">
        <path id="obj_title"
          d="M191.232,124.233H105.308c-1.239,0-2.243-1.276-2.243-2.852v-.815c0-1.573,1-2.85,2.243-2.85h6.437c4.282,0,8.192-3.657,9.068-8.981,1.2-7.316-3.216-13.824-8.775-13.824H69.41c-1.239,0-2.243-1.277-2.243-2.852v-.815c0-1.574,1-2.85,2.243-2.85h85.924c4.283,0,8.192-3.657,9.068-8.983,1.2-7.314-3.216-13.824-8.774-13.824H53.357c-4.282,0-8.191,3.657-9.068,8.983-1.2,7.316,3.216,13.824,8.775,13.824h4.167c1.239,0,2.243,1.276,2.243,2.85v.815c0,1.574-1,2.852-2.243,2.852H9.768c-4.282,0-8.192,3.657-9.068,8.981-1.2,7.316,3.216,13.824,8.775,13.824H93.129c1.238,0,2.243,1.277,2.243,2.85v.815c0,1.576-1.005,2.852-2.243,2.852H89.255c-4.282,0-8.192,3.657-9.068,8.981-1.2,7.316,3.216,13.826,8.775,13.826H191.525c5.559,0,9.98-6.51,8.775-13.826-.876-5.325-4.787-8.981-9.068-8.981"
          transform="translate(0.021 -65.087)" fill="none" :stroke="color" stroke-width="1" />
      </svg>
    </div>
    <slot />
    <div :class="opposite ? `first` : `last`">
      <svg xmlns="http://www.w3.org/2000/svg" width="201.041" height="82.453" viewBox="0 0 201.041 83" class="max-lg:w-[142px] max-lg:h-[58px]">
        <path id="obj_title_2"
          d="M191.232,124.233H105.308c-1.239,0-2.243-1.276-2.243-2.852v-.815c0-1.573,1-2.85,2.243-2.85h6.437c4.282,0,8.192-3.657,9.068-8.981,1.2-7.316-3.216-13.824-8.775-13.824H69.41c-1.239,0-2.243-1.277-2.243-2.852v-.815c0-1.574,1-2.85,2.243-2.85h85.924c4.283,0,8.192-3.657,9.068-8.983,1.2-7.314-3.216-13.824-8.774-13.824H53.357c-4.282,0-8.191,3.657-9.068,8.983-1.2,7.316,3.216,13.824,8.775,13.824h4.167c1.239,0,2.243,1.276,2.243,2.85v.815c0,1.574-1,2.852-2.243,2.852H9.768c-4.282,0-8.192,3.657-9.068,8.981-1.2,7.316,3.216,13.824,8.775,13.824H93.129c1.238,0,2.243,1.277,2.243,2.85v.815c0,1.576-1.005,2.852-2.243,2.852H89.255c-4.282,0-8.192,3.657-9.068,8.981-1.2,7.316,3.216,13.826,8.775,13.826H191.525c5.559,0,9.98-6.51,8.775-13.826-.876-5.325-4.787-8.981-9.068-8.981"
          transform="translate(0.021 -65.087)" fill="none" :stroke="color" stroke-width="1" />
      </svg>
    </div>
  </div>
  </div>
</template>
<style lang="scss" scoped>
.section-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: stretch;
  min-width: max-content;

  >.first {
    display: flex;
    align-items: end;

    >svg {
      @media (max-width: 1024px) {
        width: 142px;
        height: 58px;
      }
    }
  }

  >.last {
    display: flex;
    align-items: start;

    >svg {
      @media (max-width: 1024px) {
        width: 142px;
        height: 58px;
      }
    }
  }
}
</style>

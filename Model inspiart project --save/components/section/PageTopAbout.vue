<template>
  <div class="pt-[60px] pb-[50px]">
    <AtomSectionTitle
      en_title="ABOUT"
      title="InspiartZギターコース<br>68,000人に指示される理由"
      sub_title="おトクに、気軽に、スタートできる！"
    />
    <div class="px-5">
      <div v-if="recommendUsers.length > 0 && recommendUsers[id].length > 0">
        <MoleBigRecommendUser
          v-for="(user, i) in recommendUsers[id].slice(0, 3)"
          :key="i"
          :user="user"
        />
        <div class="flex flex-wrap justify-between items-start gap-y-[10px] mt-[30px]">
          <MoleRecommendUser
            v-for="(user, i) in recommendUsers[id].slice(3)"
            :key="i"
            :user="user"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: number;
}>();

const recommendUsers = await (await fetch('/data/recommend-users.json')).json();
</script>

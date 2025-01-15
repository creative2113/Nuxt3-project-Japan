<template>
  <footer class="w-full max-lg:w-[375px] overflow-x-hidden max-lg:mx-auto bg-[#f1f1f1]">
    <Navigation />
    <EysStyle />
    <FooterMembers />
    <picture>
      <source
        media="(max-width: 1024px)"
        srcset="/images/footer-sp.webp 1x, /images/footer-sp.webp 2x"
        type="image/webp"
        width="375"
        height="3542"
      />
      <img
        src="/images/footer-pc.webp"
        width="1920"
        height="5571"
        alt="kimono footer"
        loading="lazy"
        class="w-full h-auto"
        decoding="async"
      />
    </picture>
  </footer>
</template>

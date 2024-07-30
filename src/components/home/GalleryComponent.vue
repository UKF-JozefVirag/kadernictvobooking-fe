<template>
  <SectionDescriber :section-name="$t('gallery.sectionName')" class="mt-5" id="gallery"></SectionDescriber>
  <ImageGallery :images="images"></ImageGallery>
  <div style="border-bottom: 1px solid #ececec;"></div>
</template>

<script>
import ImageGallery from "@/components/home/ImageGallery.vue";
import SectionDescriber from "@/components/home/SectionDescriber.vue";

import inside from "@/assets/images/gallery/inside.jpg";
import insideChair from "@/assets/images/gallery/inside-chair.jpg";
import insideChairs from "@/assets/images/gallery/inside-chairs.jpg";
import outside from "@/assets/images/gallery/outside.jpg";
import salon from "@/assets/images/gallery/salon.jpg";
import trimmers from "@/assets/images/gallery/trimmers.jpg";
import washingBasin from "@/assets/images/gallery/washing-basin.jpg";
import carousel2 from "@/assets/images/gallery/carousel2.jpg";
import carousel3 from "@/assets/images/gallery/carousel3.jpg";

export default {
  name: "GalleryView",
  components: { SectionDescriber, ImageGallery },
  data() {
    return {
      images: [
        { id: 1, imgSrc: inside },
        { id: 2, imgSrc: insideChair },
        { id: 3, imgSrc: insideChairs },
        { id: 4, imgSrc: outside },
        { id: 5, imgSrc: salon },
        { id: 6, imgSrc: trimmers },
        { id: 7, imgSrc: washingBasin },
        { id: 8, imgSrc: carousel2 },
        { id: 9, imgSrc: carousel3 }
      ]
    };
  }
};
</script>

<style scoped>
</style>

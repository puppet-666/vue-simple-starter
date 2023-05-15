import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Pages from 'vite-plugin-pages';
import UnoCss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
import { warmup } from 'vite-plugin-warmup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dirs: [
        './src/utils',
        './src/components',
        './src/composables',
      ],
    }),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
    Pages(),
    UnoCss({
      presets: [
        presetUno(),
        presetAttributify(),
      ],
    }),
    warmup({
      clientFiles: ['./src/**/*.vue', './index.html'],
    }),
  ],
});

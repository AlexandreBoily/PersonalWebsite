import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            defaultTheme:"light",
            light:{
                primary:{
                    base:colors.white,
                    darken1:colors.grey.lighten1
                },
                secondary:{
                    base:colors.grey.lighten3,
                    darken1:colors.grey.lighten2
                }
            }
        }
    }
});

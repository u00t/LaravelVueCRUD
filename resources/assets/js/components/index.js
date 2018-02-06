import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import vSelect from 'vue-select'
import Actions from './Actions';
import { HasError, AlertError, AlertSuccess } from 'vform'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationDropdown from 'vuetable-2/src/components/VuetablePaginationDropdown'

import { Drop, DropContent } from '../admin/components/drop'
import Sidebar from '../admin/components/sidebar'
import toggle from '../admin/directives/toggle'
import menu from '../admin/directives/menu'
import { IconSuccess, IconDanger, IconWarning } from '../admin/components/icon'

import Alert from '../admin/components/alert'
import DatePicker from '../admin/components/datepicker'

// Components that are registered globaly.
[
  Card,
  Child,
  Button,
  Checkbox,
  HasError,
  Alert,
  AlertError,
  AlertSuccess,
  Actions,
  Drop,
  DropContent,
  DatePicker,
  Sidebar,
  IconSuccess, 
  IconDanger,
  IconWarning
].forEach(Component => {
  Vue.component(Component.name, Component)
})

Vue.directive('toggle', toggle)
Vue.directive('menu', menu)

Vue.component('v-select', vSelect);

Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination', VuetablePagination)
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown)

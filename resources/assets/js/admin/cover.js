import './utils/polyfill.js'
import Alert from './components/alert'
import Note from './components/note'
import InputFile from './components/input-file'
import InputNumber from './components/input-number'
import Modal from './components/modal'
import { Drop, DropContent } from './components/drop'
import Sidebar from './components/sidebar'
import { Tabs, TabPane } from './components/tabs'
import CircleChart from './components/circle-chart'
import Slider from './components/slider'
import DatePicker from './components/datepicker'
import Multiselect from 'vue-multiselect'
import notify from './components/notify'
import alertify from './components/alertify'
import clickoutside from './directives/clickoutside'
import toggle from './directives/toggle'
import menu from './directives/menu'
import { IconSuccess, IconDanger, IconWarning } from './components/icon'

const Cover = {
  Alert,
  Note,
  InputFile,
  InputNumber,
  Modal,
  Drop,
  DropContent,
  Sidebar,
  Tabs,
  TabPane,
  CircleChart,
  Slider,
  DatePicker,
  Multiselect,
  notify,
  alertify,
  clickoutside,
  toggle,
  menu,
  IconSuccess,
  IconDanger,
  IconWarning
}

const install = function (Vue, opts = {}) {
  // Service
  Vue.directive('clickoutside', clickoutside)
  Vue.directive('toggle', toggle)
  Vue.directive('menu', menu)
  Vue.prototype.$notify = notify
  Vue.prototype.$alertify = alertify

  // Components
  Vue.component(Sidebar.name, Sidebar)
  Vue.component(Alert.name, Alert)
  Vue.component(Note.name, Note)
  Vue.component(Drop.name, Drop)
  Vue.component(DropContent.name, DropContent)
  Vue.component(Modal.name, Modal)
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabPane.name, TabPane)
  Vue.component(CircleChart.name, CircleChart)
  Vue.component(IconSuccess.name, IconSuccess)
  Vue.component(IconDanger.name, IconDanger)
  Vue.component(IconWarning.name, IconWarning)
  Vue.component(InputFile.name, InputFile)
  Vue.component(InputNumber.name, InputNumber)
  Vue.component(DatePicker.name, DatePicker)
  Vue.component(Slider.name, Slider)
  Vue.component('Multiselect', Multiselect)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Cover.install = install

export default Cover

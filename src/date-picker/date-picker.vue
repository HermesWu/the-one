<template>
  <div class="t-date-picker-wrapper">
    <div class="t-date-picker-pop" ref="popoverContainer">
      <t-popover position="bottom" style="border: 1px solid red;" :popoverContainer="popoverContainer" >
        <t-input type="text" :value="formattedValue()"></t-input>

        <template slot="content">
          <div class="t-date-picker-pop" @selectstart.prevent>
            <div class="t-date-picker-pop-nav">
              <span :class="c('prevYear','navItem')" @click="onClickPrevYear">
                <t-icon name="leftleft"></t-icon>
              </span>
              <span :class="c('prevMonth','navItem')" @click="onClickPrevMonth"> <t-icon name="left"></t-icon> </span>
              <span :class="c('yearAndMonth')" @click="onClickMonth">
                <span >{{display.year}}年</span>
                <span >{{display.month + 1}}月</span>
              </span>
              <span :class="c('nextMonth', 'navItem')" @click="onClickNextMonth">
                <t-icon name="right"></t-icon>
              </span>
              <span :class="c('nextYear','navItem')" @click="onClickNextYear">
                <t-icon name="rightright"></t-icon>
              </span>
            </div>
            <div class="t-date-picker-panels">
              <div class="t-date-picker-pop-content">
                <template v-if="mode === 'months'">
                  <div :class="c('selectMonth')">
                    <select name="" id="" :value="display.year" @change="onChangeYear">
                      <option v-for="year in years" :value="year" :key="year">{{year}}</option>
                    </select>年
                    <select name="" id="" :value="display.month + 1" @change="onChangeMonth">
                      <option v-for="month in 12" :value="month">{{month}}</option>
                    </select>月
                  </div>
                </template>
                <template v-else>
                  <div :class="c('weekdays')">
                  <span :class="c('weekday')" v-for="i in [0, 1, 2, 3, 4, 5, 6]" :key="i">
                      {{ weekdays[i]}}
                  </span>
                  </div>
                  <div :class="c('row')" v-for="i in 6" :key="i">
                  <span :class="[c('cell'), {currentMonth: isCurrentMonth(getVisibelDay(i,j))}]" v-for="j in 7" :key="j" @click="onClickCell(getVisibelDay(i, j))">
                      {{getVisibelDay(i, j).getDate()}}
                  </span>
                  </div>
                </template>
              </div>
            </div>

          </div>
        </template>
      </t-popover>
    </div>
  </div>
</template>
<script>
  import TInput from '../input/input'
  import TIcon from '../icon'
  import TPopover from '../popover/popover'
  import helper from './helper'


  export default {
    name: 'TheonenDatePicker',
    components: {
      TInput,
      TPopover,
      TIcon
    },
    props: {
      value: {
        type: Date
      },
      scope:{
        type: Array,
        default: () => [new Date(1900, 0, 1), helper.addYear(new Date(), 100)]
      }
    },
    data() {
      let [year, month] = helper.getYearMonthDate(this.value)
      return {
        mode: 'days',
        popoverContainer: null,
        display:{year, month},
        weekdays: ['一', '二', '三', '四', '五', '六', '日'],
      }
    },
    mounted() {
      this.popoverContainer = this.$refs.popoverContainer
    },
    methods: {
      c(...classNames) {
        return classNames.map(className => `t-date-picker-${className}`)
      },
      isCurrentMonth(date){
        let [year, month] = helper.getYearMonthDate(date)
        return year === this.display.year && month === this.display.month
      },
      formattedValue(){
        const [year, month, day] = helper.getYearMonthDate(this.value)
        return `${year}-${month + 1}-${day}`
      },
      getVisibelDay(i, j){
        return this.visibleDays[(i-1)*7+j-1]
      },
      onClickCell(date){
        this.$emit('input', date)
      },
      onClickYear() {
        this.mode = 'years'
      },
      onClickMonth() {
        console.log(this.mode);
        if(this.mode !== 'months'){
          this.mode = 'months'
        }else{
          this.mode = 'day'
        }

      },
      onClickPrevYear(){
        let oldDate = new Date(this.display.year, this.display.month)
        let newDate = helper.addYear(oldDate, -1)
        let [year, month] = helper.getYearMonthDate(newDate)
        this.display = {year, month}
      },
      onClickPrevMonth(){
        let oldDate = new Date(this.display.year, this.display.month)
        let newDate = helper.addMonth(oldDate, -1)
        let [year, month] = helper.getYearMonthDate(newDate)
        this.display = {year, month}
      },
      onClickNextYear(){
        let oldDate = new Date(this.display.year, this.display.month)
        let newDate = helper.addYear(oldDate, 1)
        let [year, month] = helper.getYearMonthDate(newDate)
        this.display = {year, month}
      },
      onClickNextMonth(){
        let oldDate = new Date(this.display.year, this.display.month)
        let newDate = helper.addMonth(oldDate, 1)
        let [year, month] = helper.getYearMonthDate(newDate)
        this.display = {year, month}
      },
      onChangeYear(e){
        const year = e.target.value - 0
        const tempDate = new Date(year, this.display.month)
        if(tempDate >= this.scope[0] && tempDate <= this.scope[1]){
          this.display.year = year
        }else{
          e.target.value = this.display.year
        }
      },
      onChangeMonth(e){
        const month = e.target.value - 0
        const tempDate = new Date(this.display.year, month)
        if(tempDate >= this.scope[0] && tempDate <= this.scope[1]){
          this.display.month = month - 1
        }else{
          e.target.value = this.display.month
        }
      }
    },
    computed: {
      visibleDays() {
        let date = new Date(this.display.year, this.display.month, 1)
        let firstDay = helper.firstDayOfMonth(date)
        let array = []
        let weekDayOfFirst = firstDay.getDay() || 7 // 获得星期是 0-6 我们需要把0 变为星期天
        let x = firstDay - (weekDayOfFirst - 1) * 3600 * 24 * 1000
        for (let i = 0; i < 42; i++) {
          array.push(new Date(x + i * 3600 * 24 * 1000))
        }
        console.log(array)
        return array
      },
      years() {
        return helper.range(this.scope[0].getFullYear(), this.scope[1].getFullYear() + 1)
      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  .t-date-picker-wrapper {
    /deep/ .t-popover-content-wrapper {
      padding: 0;
    }

    .t-date-picker {
      &-pop-nav {
        display: flex;
      }

      &-yearAndMonth {
        margin: auto;
      }
      &-selectMonth {
        width: 224px;
        height: 224px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-cell {
        user-select: none;
        color: #ddd;
        &.currentMonth{
          color: #000;
        }
      }

      &-cell, &-weekday, &-navItem {
        width: 32px;
        height: 32px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
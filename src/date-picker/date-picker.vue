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
                  年和月
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
      &-pop-content{
        width: 244px;
        height: 244px;
      }
      &-yearAndMonth {
        margin: auto;
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
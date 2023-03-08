import * as React from "react"
// css
import * as Styles from "../styles/_calendar.module.scss"

const Calendar = () => (
  <>
    <h3 className={Styles.CalendarTitle}>2023年度 カレンダー</h3>
    <p className={Styles.addFee}>繁忙期料金1,100円加算（出発日ベース）</p>

    <div className={Styles.CalendarContainer}>
      <div className={Styles.monthContainer}>
        <ul className={Styles.month}>
          <li>2023</li>
          <li className={Styles.monthInt}>4</li>
          <li>April</li>
        </ul>
        <table border="1">
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
          </tr>
          <tr>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
          </tr>
          <tr>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td className={Styles.addFeeDay}>28</td>
            <td className={Styles.addFeeDayHoliday}>29</td>
          </tr>
          <tr>
            <td className={Styles.addFeeDay}>30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      {/* 5gatu */}
      <div className={Styles.monthContainer}>
        <ul className={Styles.month}>
          <li>2023</li>
          <li className={Styles.monthInt}>5</li>
          <li>May</li>
        </ul>
        <table border="1">
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
          <tr>
            <td></td>
            <td className={Styles.addFeeDay}>1</td>
            <td className={Styles.addFeeDay}>2</td>
            <td className={Styles.addFeeDayHoliday}>3</td>
            <td className={Styles.addFeeDayHoliday}>4</td>
            <td className={Styles.Holiday}>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
          </tr>
          <tr>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
          </tr>
          <tr>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
          </tr>
          <tr>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>

      {/* 6 gatu  */}
      <div className={Styles.monthContainer}>
        <ul className={Styles.month}>
          <li>2023</li>
          <li className={Styles.monthInt}>6</li>
          <li>June</li>
        </ul>
        <table border="1">
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
          </tr>
          <tr>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  </>
)

export default Calendar

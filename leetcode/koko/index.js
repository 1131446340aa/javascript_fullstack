/**
 * 
 * @param {array} piles 
 * @param {int} H 
 * @retrun {int} lo  
 * @func 求最慢的吃法
 */
// 1 .. 11  O（n） 时间复杂度 
// 5 可以吃到 左边就可以， 
// 反过来， 找右边 ,每次都可以放掉一半的尝试 
// 1 .. 4   2  
// 3..4  二分查找   log2N   8   3 

const canEatAllBananas = (piles, H, mid) => {
    // 能吃完
    let h = 0;
    for (let pile of piles) {
      h += Math.ceil(pile / mid);
    }
    return h <= H;
  }
  
  const minEatingSpeed = (piles, H) => {
    let lo = 1;
    let hi = Math.max(...piles);
    let mid = 0;
    
    // console.log(1 .. hi   最小)  中间试下;
    while(lo <= hi) {
      mid = lo + ((hi-lo) >> 1);
      console.log(lo, mid, hi, '++++');
      if (canEatAllBananas(piles, H, mid)) {
        hi = mid - 1; // 取它的左边 
      } else {
        lo = mid + 1; //取它的右边
      }
    }
    console.log(lo, mid, hi, '------');
    return lo;
  }
  console.log(minEatingSpeed([3, 6, 7, 11], 8));
  
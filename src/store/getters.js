export const navList = state => state.navList

export const userInfo = state => state.userInfo

export const showSignInModal = state => state.showSignInModal

export const showSignUpModal = state => state.showSignUpModal

export const categoryList = state => state.categoryList

export const categoryIdByValue = state => value => {
  return value ? state.categoryList.filter(item => item.value === value)[0]._id : ''
}

export const blogResult = state => state.blogResult

export const highLightIndex = state => state.highLightIndex

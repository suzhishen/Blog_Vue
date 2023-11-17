const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  name: state => state.user.name,
  user: state => state.user.user,
  company: state => state.user.company,
  ws: state => state.notice.ws,
  drawer: state => state.notice.drawer,
  chartFlag: state => state.notice.chartFlag,
  notice_unread_count: state => state.notice.notice_unread_count,
  inform_unread_count: state => state.notice.inform_unread_count,
  cabinetData: state => state.notice.cabinetData,
  btnKnowFlag: state => state.notice.btnKnowFlag
}
export default getters

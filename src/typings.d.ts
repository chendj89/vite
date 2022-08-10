import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    /**
     * 权限
     */
    isAdmin?: boolean;
    /**
     * 请求权限
     */
    requiresAuth?: boolean;
    /**
     * 日志
     */
    log?(): void;
  }
}

const {Router}=require('express')

const superAdminRouter=Router()

superAdminRouter.get('/dashboard',superAdminController...)
superAdminRouter.get('/dashboard/tenants',superAdminController...)
superAdminRouter.get('/dashboard/tenants/offboard',superAdminController...)
superAdminRouter.get('/dashboard/tenants/:offboardId',superAdminController...)
superAdminRouter.get('/dashboard/tenants/deactivate',superAdminController...)
superAdminRouter.get('/dashboard/tenants/deactivate/:id',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/hospitals',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/locations',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId/branches',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId/branches/:branchId',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId/branches/:branchId/stock',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId/branches/:branchId/categories',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId/branches/:branchId/departments',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId/branches/:branchId/categories/:categoryId',superAdminController...)
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId/branches/:branchId/departments/:departmentId',superAdminController...)


module.exports=superAdminRouter;



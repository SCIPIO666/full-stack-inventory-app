const {Router}=require('express')

const superAdminRouter=Router()

superAdminRouter.get('/dashboard')
superAdminRouter.get('/dashboard/tenants')
superAdminRouter.get('/dashboard/:tenantId')
superAdminRouter.get('/dashboard/:tenantId/hospitals')
superAdminRouter.get('/dashboard/:tenantId/locations')
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId')
superAdminRouter.get('/dashboard/:tenantId/hospitals/:hospitalId/branches')
superAdminRouter.get('/offboard')
superAdminRouter.get('/offboard/:tenantId')



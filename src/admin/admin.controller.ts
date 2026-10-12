import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/auth.guard';
import type { AuthenticatedRequest } from '../auth/auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin', 'editor')
@Controller('admin')
export class AdminController {
  @Get('dashboard')
  @ApiOperation({ summary: 'Verify admin access and return the current user' })
  dashboard(@Req() request: AuthenticatedRequest) {
    return { email: request.user.sub, role: request.user.role };
  }
}

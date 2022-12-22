import { Router } from 'express';
import { getUserConnections } from '../controllers/room.controller';

const router = Router();

router.get('/:userId/connections', getUserConnections);

module.exports = router;

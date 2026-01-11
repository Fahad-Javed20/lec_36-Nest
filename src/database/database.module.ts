import { Global, Module } from '@nestjs/common';
import { InMemoryDatabase } from './in-memory-database';

@Global()
@Module({
  imports: [],
  providers: [InMemoryDatabase],
  exports: [InMemoryDatabase],
})
export class DatabaseModule {}

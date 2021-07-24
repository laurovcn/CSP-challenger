import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Phone } from './entities/phone.entity';

@Injectable()
export class PhonesService {
  constructor(
    @InjectRepository(Phone)
    private phoneRepository: Repository<Phone>,
  ) {}

  create(createPhoneDto: CreatePhoneDto) {
    return this.phoneRepository.save(createPhoneDto);
  }

  findAll() {
    return this.phoneRepository.find();
  }

  findByUser(userId: string) {
    return this.phoneRepository.find({userId});
  }

  async update(id: number, updatePhoneDto: UpdatePhoneDto) {    
    await this.phoneRepository.findOne({id});
    return await this.phoneRepository.update(id, updatePhoneDto);
  }       

  remove(id: number) {
    return this.phoneRepository.delete(id);
  }
}

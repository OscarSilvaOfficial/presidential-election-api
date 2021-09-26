// Class impletens base prisma persistence methods
export abstract class BaseRepository {
  private prisma: any;

  constructor(prisma: any) {
    this.prisma = prisma;
  }

  // Get all records
  async all(): Promise<any> {
    return await this.prisma.findMany();
  }

  // Get a record by id
  async findOne(id: number): Promise<any> {
    return await this.prisma.findOne({
      where: {
        id: id,
      },
    });
  }

  // Add a new record
  async add(data: any): Promise<any> {
    return await this.prisma.create(data);
  }

  // Update a record
  async update(id: number, data: any): Promise<any> {
    return await this.prisma.update({
      where: { id },
      data,
    });
  }

  // Delete a record
  async delete(id: number): Promise<any> {
    return await this.prisma.delete({
      where: { id },
    });
  }
}

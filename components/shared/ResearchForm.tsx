'use client';

import { ResearchSchema } from '@/lib/zodschemas';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { researchDefaultValues } from '@/constants';
import { useState } from 'react';
import { FileUploader } from './FileUploader';

type Props = {
  //userId: string;
};

const ResearchForm = (props: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const initialValues = researchDefaultValues;

  const form = useForm<z.infer<typeof ResearchSchema>>({
    resolver: zodResolver(ResearchSchema),
    defaultValues: initialValues,
  });
  return (
    <Form {...form}>
      <form onSubmit={() => {}} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Title"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="program"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paperUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FileUploader
                  onFieldChange={field.onChange}
                  paperUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" size="lg">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ResearchForm;

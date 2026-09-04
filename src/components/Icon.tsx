import {
  LayoutDashboard, Users, Mail, FileText, FileStack, Share2, Archive,
  Inbox, Send, AlertCircle, Search, Plus, Upload, Download, Eye, Edit,
  Trash2, Filter, ChevronDown, ChevronLeft, ChevronRight, Menu, X,
  Bell, LogOut, Settings, HelpCircle, Calendar, Clock, Check, CheckCircle2,
  Circle, ArrowUpRight, ArrowDownRight, FileUp, FolderOpen, File, Image,
  FileType, FileSpreadsheet, MoreVertical, Printer, Save, RefreshCw,
  User, Phone, MapPin, GraduationCap,
  Home, ClipboardList, UserCog, ArrowLeft, Star, Pencil, Copy, Layers,
  Maximize2, ZoomIn, FileImage, BookOpen, ShieldCheck, Building2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard, Users, Mail, FileText, FileStack, Share2, Archive,
  Inbox, Send, AlertCircle, Search, Plus, Upload, Download, Eye, Edit,
  Trash2, Filter, ChevronDown, ChevronLeft, ChevronRight, Menu, X,
  Bell, LogOut, Settings, HelpCircle, Calendar, Clock, Check, CheckCircle2,
  Circle, ArrowUpRight, ArrowDownRight, FileUp, FolderOpen, File, Image,
  FileType, FileSpreadsheet, MoreVertical, Printer, Save, RefreshCw,
  User, Phone, MapPin, GraduationCap,
  Home, ClipboardList, UserCog, ArrowLeft, Star, Pencil, Copy, Layers,
  Maximize2, ZoomIn, FileImage, BookOpen, ShieldCheck, Building2,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function Icon({ name, className = 'w-5 h-5', size, strokeWidth = 2 }: IconProps) {
  const Cmp = ICONS[name] ?? Circle;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} />;
}
